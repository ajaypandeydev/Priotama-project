
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  IconButton,
  styled,
} from "@mui/material";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { TbMessageChatbotFilled } from "react-icons/tb";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import Picker from "emoji-picker-react";

// Styled chat button with bounce shadow
const PulseButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#F75270",
  color: "white",
  width: 40,
  height: 40,
  borderRadius: "50%",
  "&:hover": { backgroundColor: "#e23b60" },
  animation: "pulse 1s infinite",
  boxShadow: theme.shadows[3],
"@keyframes pulse": {
  "0%": { boxShadow: "0 0 0 0 rgba(255,0,102,0.8)" }, 
  "70%": { boxShadow: "0 0 0 10px rgba(255,0,102,0)" },
  "100%": { boxShadow: "0 0 0 0 rgba(255,0,102,0)" },
}

}));

function DatingChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const welcomeMessages = [{ sender: "girl", text: "Hi! Welcome to the ChatBot." }];

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setMessages(welcomeMessages);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "boy", text: input }]);

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "girl", text: generateReply(input) }]);
    }, 500);

    setInput("");
    setShowEmojiPicker(false);
  };

  const generateReply = (msg) => {
    const text = msg.toLowerCase();
    if (text.includes("hi") || text.includes("hello")) return "Hello! Nice to meet you.";
    if (text.includes("date") || text.includes("meet"))
      return "That sounds fun! What kind of date do you like?";
    if (text.includes("profile")) return "You can check my profile to know more!";
    return "Tell me more about yourself!";
  };

  const onEmojiClick = (emojiData) => {
    setInput((prev) => prev + emojiData.emoji);
  };

  return (
    <Box sx={{ position: "fixed", bottom: 15, right: 15, zIndex: 1000 }}>
      {/* Floating Toggle Button */}
      <PulseButton onClick={handleToggle}>
        {isOpen ? <CloseIcon sx={{ width: 20, height: 20 }} /> : <TbMessageChatbotFilled sx={{ width: 30, height: 30}} color="#FFF078"/> }
      </PulseButton>

      {/* Chat Window */}
      {isOpen && (
        <Paper
          elevation={6}
          sx={{
            width: { xs: "70vw", sm: 300 },
            height: { xs: "50vh", sm: 350 },
            mt: 2,
            p: 1,
            borderRadius: 4,
            bgcolor: "#FFF5F2",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header */}
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mb: 2 }}>
            <Typography variant="h6" fontWeight="bold" color="#F75270" mr={1}>
              ChatBot
            </Typography>
            <FavoriteIcon sx={{ color: "#F75270" }} />
          </Box>

          {/* Messages */}
          <List sx={{ flexGrow: 1, overflowY: "auto" }}>
            {messages.map((msg, index) => (
              <ListItem
                key={index}
                sx={{ justifyContent: msg.sender === "boy" ? "flex-end" : "flex-start", py: 0.3, px: 1 }}
              >
                {msg.sender === "girl" && (
                  <ListItemAvatar>
                    <Avatar sx={{ mr: 0.5, bgcolor: "#d6eaff", height: "30px", width: "30px" }}>
                      <FemaleIcon sx={{ fontSize: 16 }} />
                    </Avatar>
                  </ListItemAvatar>
                )}

                <Box
                  sx={{
                    display: "inline-block",
                    bgcolor: msg.sender === "boy" ? "#ffe4ec" : "#d6eaff",
                    borderRadius: 2,
                    p: 1,
                    maxWidth: "70%",
                    textAlign: msg.sender === "boy" ? "right" : "left",
                    wordBreak: "break-word",
                  }}
                >
                  {msg.text}
                </Box>

                {msg.sender === "boy" && (
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "#ffe4ec", ml: 0.5, height: "30px", width: "30px" }}>
                      <MaleIcon sx={{ fontSize: 16 }} />
                    </Avatar>
                  </ListItemAvatar>
                )}
              </ListItem>
            ))}
          </List>

          {/* Input */}
          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <IconButton onClick={() => setShowEmojiPicker(!showEmojiPicker)} sx={{ mr: 1, color: "#F75270" }}>
              <EmojiEmotionsIcon />
            </IconButton>

            <TextField
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSend();
                }
              }}
              variant="outlined"
              size="small"
              InputProps={{ sx: { fontSize: 12, p: "6px 8px" } }}
            />

            <IconButton
              onClick={handleSend}
              sx={{
                ml: 1,
                bgcolor: "#F75270",
                color: "white",
                width: 32,
                height: 32,
                p: 0,
                borderRadius: "50%",
                boxShadow: 2,
                "&:hover": { bgcolor: "#e23b60" },
              }}
            >
              <SendIcon sx={{ fontSize: 16, color:"FF0066"}} />
            </IconButton>
          </Box>

          {/* Emoji Picker */}
          {showEmojiPicker && (
            <Box sx={{ mt: 1, maxHeight: 200, overflowY: "auto" }}>
              <Picker onEmojiClick={onEmojiClick} width="100%" />
            </Box>
          )}
        </Paper>
      )}
    </Box>
  );
}

export default DatingChatBot;
import React, {useEffect, useState} from "react";
import {Button, Grid} from "@mui/material";
import Textarea from "@mui/joy/Textarea";
import Images from "../../constants/images";
import CharStyles from "../../styles/chat";
import RexMessage from "../../components/RexMessage";
import api from "../../api/sessions";
import OpenAI from "openai"
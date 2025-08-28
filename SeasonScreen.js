import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { cache } from "react";
import { useConversation } from "@elevenlabs/react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Canvas, Circle, Group } from "@shopify/react-native-skia";
import Gradient from "./Gradient";
import {keys} from './PrivetKeys'

const SeasonScreen = () => {
  const { width, height } = Dimensions.get("screen");

  const r = width * 0.33;
  const conversation = useConversation({
    onConnect: () => console.log("Connected to conversation"),
    onDisconnect: () => console.log("Disconnected from conversation"),
    onMessage: (message) => console.log("Received message:", message),
    onError: (error) => console.error("Conversation error:", error),
    onModeChange: (mode) => console.log("Conversation mode changed:", mode),
    onStatusChange: (prop) =>
      console.log("Conversation status changed:", prop.status),
    onCanSendFeedbackChange: (prop) =>
      console.log("Can send feedback changed:", prop.canSendFeedback),
    onUnhandledClientToolCall: (params) =>
      console.log("Unhandled client tool call:", params),
  });

  const startConversation = async () => {
    try {
      await conversation.startSession({
        agentId: keys.agentId,
        dynamicVariables: {
          user_name: "Dev Zaveri",
        },
      });
    } catch (e) {
      console.log("Error:====>", e);
    }
  };

  const EndConversation = async () => {
    try {
      await conversation.endSession();
    } catch (e) {
      console.log("Error:====>", e);
    }
  };
  return (
    <SafeAreaView style={styles.MainContainer}>
      <Gradient />
      <Text style={styles.TitleText}>Luna — Your Personal AI Assistant</Text>
      <Text style={styles.DescriptionText}>
        Always by your side. Smart, witty, and supportive— a friend, a guide,
        and a mentor.
      </Text>
      <TouchableOpacity
      onPress={()=> {
        if(conversation.status === 'connected'){
            EndConversation()
        } else {
            startConversation()
        }
      }}
      style={styles.HandleButton}>
        <Text style={styles.ButtonText}>
            {conversation.status === 'connected' ? "End Conversation" : conversation.status === 'connecting' ? 'connecting Conversation' : "Start Conversation" }
            </Text>
      </TouchableOpacity>
      <View style={styles.FooterView}>
        <Text style={styles.footerText}>Created with ❤️ by Dev Zaveri</Text>
      </View>
    </SafeAreaView>
  );
};

export default SeasonScreen;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  TitleText: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
  },
  DescriptionText: {
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    marginTop: 10,
  },
  HandleButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: "#007AFF",
    borderRadius: 20,
    marginTop: 20,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  ButtonText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#ffffff",
  },
  FooterView: {
    position: 'absolute',
    bottom: 80
  },
  footerText: {
     fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    color: "#000000",
  }
});

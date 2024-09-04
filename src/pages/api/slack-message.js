// pages/api/send-slack-message.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL; // 환경 변수에서 Webhook URL 읽기

  // 보낼 메시지 데이터
  const messageData = {
    text: "Hello! This is your scheduled reminder from Next.js.",
  };

  // Slack으로 메시지 전송
  const response = await fetch(slackWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  });

  // 응답 처리
  if (response.ok) {
    res.status(200).json({ message: "Message sent to Slack successfully" });
  } else {
    res.status(500).json({ message: "Failed to send message to Slack" });
  }
}

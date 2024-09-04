export const dynamic = "force-dynamic"; // static by default, unless reading the request
import fetch from "node-fetch";

// pages/api/send-slack-message.js

export default async function handler(req, res) {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL; // 환경 변수에서 Webhook URL 읽기

  // 보낼 메시지 데이터
  const messageData = {
    text: "오늘 모각스에 참여하실 분들은 \nzep에 입장해주세요. 본 스레드에 오늘의 공부 목표를 답글로 적어주세요.\n\nZEP 링크 : https://zep.us/play/yBdEwz\n\nZEPZEP\n국모다it 메타버스 캠퍼스 | 쉽고 재미있는 메타버스 ZEP\n공부하고 싶다면 누구나 들어오세요~",
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

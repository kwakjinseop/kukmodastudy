// src/app/api/cron/route.js

import { NextResponse } from "next/server";
import fetch from "node-fetch";

// POST 요청을 처리하는 함수
export async function POST(req) {
  const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL; // 환경 변수에서 Webhook URL 읽기

  const messageData = {
    text: "오늘 모각스에 참여하실 분들은 \nzep에 입장해주시고 본 스레드에 오늘의 공부 목표를 답글로 적어주세요.\n\nZEP 링크 : https://zep.us/play/yBdEwz\n\nZEPZEP\n국모다it 메타버스 캠퍼스 | 쉽고 재미있는 메타버스 ZEP\n공부하고 싶다면 누구나 들어오세요~",
  };

  const response = await fetch(slackWebhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageData),
  });

  if (response.ok) {
    return NextResponse.json({ message: "Message sent to Slack successfully" });
  } else {
    return NextResponse.json(
      { message: "Failed to send message to Slack" },
      { status: 500 }
    );
  }
}

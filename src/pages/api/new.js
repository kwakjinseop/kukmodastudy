export default function handler(request, respond) {
  if (request.method == "GET") {
    return respond.status(200).json("안녕");
  } else {
    return respond.status(300).json("안녕22");
  }
}

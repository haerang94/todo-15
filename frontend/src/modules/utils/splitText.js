export default function splitText(text) {
  const title = text.substr(0, 20); //20글자까지는 타이틀
  const content = text.substr(20);
  return { title, content };
}

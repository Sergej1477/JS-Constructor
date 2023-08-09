import image from "./assets/223327.png";

export const model = [
  {
    type: "title",
    value: "Конструктор на чистом JavaScript",
    options: {
      tag: "h2",
      styles: {
        background: "linear-gradient(to right, #ff0099, #493240)",
        color: "#fff",
        padding: "1.5rem",
        "text-align": "center",
      },
    },
  },
  { type: "text", value: "here we go with some text" },
  { type: "columns", value: ["111111111", "222222222", "333333333"] },
  { type: "image", value: image },
];

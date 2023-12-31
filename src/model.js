import image from "./assets/223327.png";
import {
  TextBlock,
  TitleBlock,
  ColumnsBlock,
  ImageBlock,
} from "./classes/blocks";

const text = "Урок тут: https://www.youtube.com/watch?v=0ViiJ8qTCFM";

export const model = [
  new TitleBlock("Конструктор на чистом JavaScript", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#fff",
      padding: "1.5rem",
      "text-align": "center",
    },
  }),

  new ImageBlock(image, {
    styles: {
      display: "flex",
      padding: "2rem 0",
      "justify-content": "center",
    },
    imageStyles: {
      width: "500px",
      height: "auto",
    },
    alt: "Это картинка",
  }),

  new ColumnsBlock(
    [
      "Приложение на чистом JavaScript, без использования библиотек",
      "Узнаешь как работают принципы SOLID и ООП в JavaScript",
      "JavaScript - это просто, интересно. Научись создавать любые UI своими руками",
    ],
    {
      styles: {
        background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
        padding: "2rem",
        color: "#fff",
        "font-weight": "bold",
      },
    }
  ),

  new TextBlock(text, {
    styles: {
      background: "linear-gradient(to left, #f2994a, #f2c94c)",
      padding: "1rem",
      "font-weight": "bold",
    },
  }),
];

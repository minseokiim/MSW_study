import { rest } from "msw";

export const handlers = [
  //여기로 호출왔을때 가로채기
  rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          title: "첫 번째 할 일",
          completed: true,
        },
        {
          id: 2,
          title: "두 번째 할 일",
          completed: false,
        },
      ])
    );
  }),
];

import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/users", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Minseo",
      },
      {
        id: 2,
        name: "Test",
      },
      {
        id: 3,
        name: "MSW",
      },
    ]);
  }),
];

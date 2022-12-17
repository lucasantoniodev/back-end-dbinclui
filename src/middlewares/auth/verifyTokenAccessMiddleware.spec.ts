import request from "supertest";
import { App } from "../../App";

describe("description", () => {
  const app = new App();
  it("testando", async () => {

    

    await request(app.getExpress)
      .get("/expressions")
      .set("Authorization", `Bearer ${"eyJhbGciOiJSUzI1NiIsImtpZCI6Ijk3OGI1NmM2NmVhYmIwZDlhNmJhOGNhMzMwMTU2NGEyMzhlYWZjODciLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTHVjYXMgQW50w7RuaW8iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUVkRlRwNUNLcXhEMEprLWc1VDdhSjhmUWJIYTdCMDAtU0c1c2pBaFBZVnQ9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbGVhcm5pbmctZmlyZWJhc2UtMzZkMWIiLCJhdWQiOiJsZWFybmluZy1maXJlYmFzZS0zNmQxYiIsImF1dGhfdGltZSI6MTY3MTIzMzk5NywidXNlcl9pZCI6Im5jWm12bGE1a0RiQVBlblFVRUhZaFJBSnJ1YjIiLCJzdWIiOiJuY1ptdmxhNWtEYkFQZW5RVUVIWWhSQUpydWIyIiwiaWF0IjoxNjcxMjMzOTk3LCJleHAiOjE2NzEyMzc1OTcsImVtYWlsIjoidGVjb25mdEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMzE0MjQ3ODk1MTIxMzI0MjQ0MSJdLCJlbWFpbCI6WyJ0ZWNvbmZ0QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.hq1ZnTr7cZtqLNKR9hw3Hg7AWLGVLIF6VwEQW8u1OHPWrxpAscv-Ts0vsuyc5ApeOUmaAOQd_I_vUdSTFEkbZM92JOOcwgEo0wa1-5TFLe43nJx-6vKxyxu4bpj7OV3cRKGaocSmUlCBlxP3IlBsDwQ8aucgrM6KDN7OFlMoxI4iQeI65K2QfR7eGb5iq2Mq9QMp5FFcjqVbZ1TJlVrEop7_jtGImPg6IQR3it9c00UIwsLN3VnhFcbUyazY96zrfVUt0thFwc1pul_E98Uue4Ltc-8Tf7a7-bFaGKZ5q4uye2vNpCDUZyMHgz4gZnsZTCyMKg_w9AeKx5CUPvCapw"}`)
      .expect(400).then(data => console.log(data.body));
  });
});

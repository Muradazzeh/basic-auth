`use strict`
const {app}=require("../src/server");
const supertest=require("supertest");
const mockRequest=supertest(app);
const { db }=require("../src/models/index");


beforeAll(async () => {
    await db.sync();
});

describe("This is the jest test for the srever", ()=>{
    test('404 Not found page,パスワードを正しく作成された', async () => { 
        const response= await mockRequest.get("/lolo")
        expect(response.status).toEqual(404)      
    });
    test("Test for the HOme route,パスワードを正しく作成された", async ()=>{
        const response = await mockRequest.get("/")
        expect(response.status).toEqual(200)
     })
     test("Testing the SignUp method.パスワードを正しく作成された ", async ()=>{
        const response=await mockRequest.post("/signup").send({
            username:"MURAD ALAZZEH",
            password:"123@as"
        })
        expect(response.status).toEqual(201)
        expect(response.body.username).toBeTruthy()
    })
    // test('testing the sign in post method ', async () => {
    //     const response = await mockRequest.post('/signin').auth('MURAD ALAZZEH','123@as');
    //     expect(response.status).toBe(200);
    // });

});

    afterAll(async () => {
        await db.drop();
    });
const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
  beforeEach(async () => {  
    await connection.migrate.rollback();
    await connection.migrate.latest();
  })

  afterAll(async () => {
    await connection.destroy();
  })

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "contato@teste.com.br",
        whatsapp: "4734343423",
        city: "Aguaí",
        uf: "SP"
      });
      
      //Espera-se uma propriedade id
      expect(response.body).toHaveProperty('id');
      //Espera-se uma propriedade com 8 caracteres
      expect(response.body.id).toHaveLength(8)
  });
})  
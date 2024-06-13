import { defineDb, defineTable, column, NOW } from 'astro:db';

const TalentRegister = defineTable({
  columns : {
    id: column.number({ primaryKey: true }),
    firstName: column.text(),
    lastName: column.text(), 
    email: column.text(),
    phone: column.text(),
    city: column.text(),
    position: column.text(),
    study: column.text(),
    howHearAboutUs: column.text(),
    isOptin: column.boolean(),
  }
})

const CompanyRegister = defineTable({
  columns : {
    id: column.number({ primaryKey: true }),
    companyName: column.text(),
    zipCode: column.text(), 
    lastName: column.text(),
    firstName: column.text(),
    email: column.text(),
    phone: column.text(),
    getBackInTouch: column.boolean(),
    offers: column.boolean(),
  }
})

export default defineDb({
  tables: { TalentRegister, CompanyRegister }
});

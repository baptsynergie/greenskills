import { defineDb, defineTable, column, NOW } from 'astro:db';

const Contact = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    firstName: column.text(),
    lastName: column.text(), 
    email: column.text(),
    phone: column.text(),
    zipcode: column.text(),
    createdAt: column.date({default: NOW}),
  }
})

export default defineDb({
  tables: { Contact }
});

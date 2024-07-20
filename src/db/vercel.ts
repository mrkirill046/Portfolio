"use server"

import {createPool, sql} from "@vercel/postgres"

createPool({
    connectionString: process.env.POSTGRES_URL
});

export async function TableInsert(table: string, data: any) {
    try {
        const columns = Object.keys(data).join(", ")
        const values = Object.values(data)
        const placeholders = values.map((_, index) => `$${index + 1}`).join(", ")

        const query = `INSERT INTO ${table} (${columns}) VALUES (${placeholders}) RETURNING *`
        const result = await sql.query(query, values)

        return result.rows[0]
    } catch (error: any) {
        return error.message
    }
}

export async function TableSelect(table: string, conditions = {}) {
    try {
        const conditionKeys = Object.keys(conditions)
        const conditionValues = Object.values(conditions)
        const whereClause = conditionKeys.length
            ? "WHERE " + conditionKeys.map((key, index) => `${key} = $${index + 1}`).join(" AND ")
            : ""

        const query = `SELECT * FROM ${table} ${whereClause}`
        const result = await sql.query(query, conditionValues)

        return result.rows
    } catch (error: any) {
        return error.message
    }
}

export async function TableUpdate(table: string, data: string, conditions: string) {
    try {
        const dataKeys = Object.keys(data)
        const dataValues = Object.values(data)
        const setClause = dataKeys.map((key, index) => `${key} = $${index + 1}`).join(", ")

        const conditionKeys = Object.keys(conditions)
        const conditionValues = Object.values(conditions)
        const whereClause = "WHERE " + conditionKeys.map((key, index) => `${key} = $${index + dataKeys.length + 1}`).join(" AND ")

        const query = `UPDATE ${table} SET ${setClause} ${whereClause} RETURNING *`
        const result = await sql.query(query, [...dataValues, ...conditionValues])

        return result.rows[0]
    } catch (error: any) {
        return error.message
    }
}

export async function TableDelete(table: string, conditions: string) {
    try {
        const conditionKeys = Object.keys(conditions)
        const conditionValues = Object.values(conditions)
        const whereClause = "WHERE " + conditionKeys.map((key, index) => `${key} = $${index + 1}`).join(" AND ")

        const query = `DELETE FROM ${table} ${whereClause} RETURNING *`
        const result = await sql.query(query, conditionValues)

        return result.rows[0]
    } catch (error: any) {
        return error.message
    }
}

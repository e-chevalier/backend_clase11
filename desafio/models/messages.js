import mongoose from "mongoose"

const messagesCollection = 'messages'

const AuthorSchema = mongoose.Schema({
    id: {type: String, require: true, unique: true},
    firstName: {type: String, require: true},
    lastName: {type: String, require: true},
    edad: {type: String, require: true},
    alias: {type: String, require: true},
    avatar: {type: String, require: true, max: 250},
    date: {type: String, require: true}
})

const TextSchema = mongoose.Schema({
    text: {type: String, require: true, max:500},
})

const MessagesSchema = mongoose.Schema({
    author: AuthorSchema,
    text: TextSchema
})

export const messages = mongoose.model(messagesCollection, MessagesSchema)
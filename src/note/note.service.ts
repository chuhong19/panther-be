import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Note, NoteDocument } from './note.schema';

@Injectable()
export class NoteService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async create(data: { title: string; content?: string }) {
    return this.noteModel.create(data);
  }

  async findAll() {
    return this.noteModel.find().exec();
  }
}

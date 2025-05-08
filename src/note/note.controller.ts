import { Controller, Get, Post, Body } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Post()
  create(@Body() body: { title: string; content?: string }) {
    return this.noteService.create(body);
  }

  @Get()
  findAll() {
    return this.noteService.findAll();
  }
}

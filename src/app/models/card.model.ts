import { List } from './list.model';

export interface Card {
  id: string;
  title: string;
  position: number;
  description: string;
  list: List;
}

export interface CreateCardDto {
  title: string;
  position: number;
  description?: string;
  listId: string | number;
  boardId: string | number;
}

export interface UpdateCardDto {
  title?: string;
  position?: number;
  description?: string;
  listId?: string | number;
  boardId?: string | number;
}

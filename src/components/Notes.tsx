import * as React from 'react';
import { Note } from '../models/note.model';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'react-bootstrap';

interface INotesProps {
  note: Note,
  handleDelete: (id: string) => void
}

const Notes: React.FC<INotesProps> = ({note, handleDelete}) => {
  return (
    <div className="mb-3">
      <Card style={{backgroundColor: note.color }}>
        <CardBody>
        <CardTitle>{note.title}</CardTitle>
        <CardText>{note.text}</CardText>
        <CardSubtitle className='text-muted'>{note.date}</CardSubtitle>
        <Button className='mt-3' variant='danger' onClick={ ()=> handleDelete(note.id) }>Delete</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Notes;

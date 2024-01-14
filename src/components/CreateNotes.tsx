import * as React from 'react';
import { Note } from '../models/note.model';
import { Button, Alert, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

interface ICreateNotesProps {
  notes: Note[],
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

const CreateNotes: React.FunctionComponent<ICreateNotesProps> = ({notes, setNotes}) => {

  const [error, setError] = React.useState<string>("");
  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if(titleRef.current?.value === "" || textRef.current?.value === ""){
      return setError("All fields are mandatory");
    }
    
    setError("");
    setNotes([...notes, {
      id: (new Date()).toString(),
      title: (titleRef.current as HTMLInputElement).value,
      text: (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
      date: (new Date()).toString()
  }]);
  
  (titleRef.current as HTMLInputElement).value = "";
  (textRef.current as HTMLTextAreaElement).value = "";
  }

  return (
    <>
      <h2>Create notes</h2>
      {error && <Alert variant="danger">{ error}</Alert>}
      <Form className='mt-3 mb-3' onSubmit={(e) => handleSubmit(e)}>
        <FormGroup className='mb-3' controlId='formBasicTitle'>
          <FormLabel>Title</FormLabel>
          <FormControl type='text' placeholder='Enter title' ref={titleRef}></FormControl>
        </FormGroup>
        <FormGroup className='mb-3' controlId='formBasicTitle'>
          <FormLabel>Text</FormLabel>
          <FormControl as="textarea" placeholder='Enter your notes' rows={3} ref={textRef}></FormControl>
        </FormGroup>
        <FormGroup className='mb-3'>
          <FormLabel htmlFor='colorInput'>Notes color</FormLabel>
          <FormControl type='color' id='colorInput' defaultValue="#dfdfdf" title='select color' ref={colorRef}></FormControl>
        </FormGroup>
        <Button type='submit' variant='primary'>Submit</Button>
      </Form>
    </>
  );
};

export default CreateNotes;

'use client'

import React from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogHeader,
DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';


type Props = {}

function CreateNoteDialog({}: Props) {

    //state
    const [input, setInput] = React.useState('');
    const createNotebook = useMutation({
        mutationFn: async () => {
            const response = await axios.post('/api/createNotebook');
        }
    });
    //TODO: finish logic to hit endpoint

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {e.preventDefault()}

  return (
    <Dialog>
        <DialogTrigger>
            <div className='border-dashed border-2  flex border-green-600 h-full rounded-lg items-center justify-center sm:flex-col hover:shadow-xl transition hover:-translate-y-1 flex-row p-4'>
                <Plus className='w-6 h-6 text-green-600' strokeWidth={3}></Plus>
                <h2 className='font-semibold text-green-600 sm:mt-2'>New Note Book</h2>
            </div>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>New Notebook</DialogTitle>
                <DialogDescription>
                You can create a new note by clicking the button below.
                </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
                <Input value = {input} onChange={ e => setInput(e.target.value)} placeholder='Name...'></Input>
                <div className="h-4"></div>
                <div className="flex items-center gap-2">
                    <Button type='reset' variant={'secondary'}>Cancel</Button>
                    <Button type='submit' className='bg-green-600'>Create</Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default CreateNoteDialog
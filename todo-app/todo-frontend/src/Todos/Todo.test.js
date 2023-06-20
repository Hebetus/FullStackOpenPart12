import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders text', () => {
    const todo = {
        text: 'An experimental piece of text',
        done: true
    }

    render(<Todo todo={todo} deleteTodo={() => {}} completeTodo={() => {}}/>)

    const element = screen.getByText('An experimental piece of text')

    expect(element).toBeDefined()
})
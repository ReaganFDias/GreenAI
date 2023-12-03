import React, { useState, useEffect } from 'react'
import './Typewriter.css'

const Typewriter = () => {
    const words = ['files', 'data', 'future.'];
    const [wordIndex, setWordIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    function type() {
        const currentWord = words[wordIndex];
        const shouldDelete = isDeleting ? 1 : -1;
        setText(current => currentWord.substring(0, current.length - shouldDelete));
        if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 3000);
        } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
        }
    }

    useEffect(() => {
        const timer = setTimeout(type, isDeleting ? 100 : 200);
        // Cleanup function to clear the timeout
        return () => clearTimeout(timer);
      // Add dependencies to the dependency array
      }, [wordIndex, isDeleting, text]);

    return (
        <>
        <h1 className='folder_title'>Manage your</h1>
        <h1 className='folder_title' id='typewriter'>{text}</h1>
        </>
    )
}



export default Typewriter
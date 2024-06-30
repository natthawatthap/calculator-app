"use client"
import { useState } from 'react';
import styles from '../app/styles/Calculator.module.css';

const Calculator: React.FC = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number | string>('');

    const handleClick = (value: string) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => {
        setInput('');
        setResult('');
    };

    const handleCalculate = () => {
        try {
            setResult(eval(input));
        } catch (error) {
            setResult('Error');
        }
    };

    return (
        <div className={styles.calculator}>
        <div className={styles.display}>
            <div className={styles.input}>{input}</div>
            <div className={styles.result}>{result}</div>
        </div>
        <div className={styles.buttons}>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '+', '-', '*', '/'].map((button) => (
                <button key={button} className={styles.button} onClick={() => handleClick(button)}>{button}</button>
            ))}
            <button className={`${styles.button} ${styles.clearButton}`} onClick={handleClear}>C</button>
            <button className={`${styles.button} ${styles.equalsButton}`} onClick={handleCalculate}>=</button>
        </div>
    </div>
    );
};

export default Calculator;
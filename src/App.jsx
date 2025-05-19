import React, { useState } from 'react';
import Header from './components/Header';
import styles from './App.module.css';

export default function App() {
	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');

	const displayValue = operand1 + operator + operand2;

	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const handleNumberClick = (num) => {
		if (operator === '') {
			setOperand1((prev) => prev + num);
		} else {
			setOperand2((prev) => prev + num);
		}
	};

	const handleOperationClick = (op) => {
		switch (op) {
			case 'C':
				setOperand1('');
				setOperand2('');
				setOperator('');
				break;
			case '+':
			case '-':
				if (operand1 !== '') {
					setOperator(op);
				}
				break;

			case '=':
				if (operand1 && operator && operand2) {
					const num1 = parseInt(operand1);
					const num2 = parseInt(operand2);

					let result;
					if (operator === '+') {
						result = num1 + num2;
					} else if (operator === '-') {
						result = num1 - num2;
					}

					setOperand1(String(result));
					setOperand2('');
					setOperator('');
				}
				break;

			default:
				break;
		}
	};

	return (
		<>
			<div className={styles.calculator}>
				<Header />
				<div className={styles.display}>{displayValue || '0'}</div>

				<div className={styles.buttons}>
					{NUMS.map((num) => (
						<button key={num} onClick={() => handleNumberClick(num)}>
							{num}
						</button>
					))}

					<button
						className={styles['+']}
						onClick={() => handleOperationClick('+')}
					>
						+
					</button>
					<button
						className={styles['-']}
						onClick={() => handleOperationClick('-')}
					>
						−
					</button>
					<button
						className={styles.C}
						onClick={() => handleOperationClick('C')}
					>
						C
					</button>
					<button
						className={styles.equal}
						onClick={() => handleOperationClick('=')}
						disabled={!operand1 || !operator || !operand2}
					>
						=
					</button>
				</div>
			</div>
		</>
	);
}

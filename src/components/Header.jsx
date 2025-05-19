import React, { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
	const [now, setNow] = useState(new Date());
	setInterval(() => setNow(new Date()), 1000);
	return (
		<header className={styles.header}>
			<h3>Не очень удобный калькулятор!</h3>
			<span>Текущее время: {now.toLocaleTimeString()}</span>
		</header>
	);
}

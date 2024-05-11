import React, { useState } from "react";
import db from "../scripts/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

interface Props {
	pass: () => void;
}

const AddStuff = ({ pass }: Props) => {
	const [count, setCount] = useState(1);
	const articlesCollectionRef = collection(db, "articles");

	return (
		<button
			onClick={async (e) => {
				const docRef = await addDoc(articlesCollectionRef, {
					createdAt: serverTimestamp(),
					title: `Post number ${count}`,
					text: `lorem ${count}`,
					images: [
						`https://source.unsplash.com/random/200x200?sig=${count}`,
					],
				});

				setCount(count + 1);
				pass();
			}}>
			Click me
		</button>
	);
};

export default AddStuff;

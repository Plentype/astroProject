import React, { useEffect, useState, type AriaAttributes } from "react";
import db from "../scripts/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { type DocumentData } from "firebase/firestore";
import "../styles/Article.scss";
import AddStuff from "./AddStuff";
import { child } from "firebase/database";

interface ArticleDocument {
	title: string;
	text: string;
	images: string[];
	createdAt: {
		seconds: number;
		nanoseconds: number;
	};
	id: string;
}

function toDateTime(secs: number): Date {
	let t = new Date(0);
	t.setSeconds(secs);
	return t;
}

const Articles = () => {
	const [articles, setArticles] = useState<any>([]);
	const articlesCollectionRef = collection(db, "articles");

	function getDatabaseData() {
		const getArticlesData = async () => {
			const data = await getDocs(articlesCollectionRef);
			setArticles(
				data.docs.map((val) => {
					return {
						...val.data(),
						id: val.id,
					} as ArticleDocument;
				}),
			);
		};

		getArticlesData();
	}

	// useEffect(() => {
	// 	const getArticlesData = async () => {
	// 		const data = await getDocs(articlesCollectionRef);
	// 		setArticles(
	// 			data.docs.map((val) => {
	// 				return {
	// 					...val.data(),
	// 					id: val.id,
	// 				} as ArticleDocument;
	// 			}),
	// 		);
	// 	};

	// 	getArticlesData();
	// }, []);

	articles.sort(
		(a: ArticleDocument, b: ArticleDocument) =>
			a.createdAt.seconds < b.createdAt.seconds,
	);

	const childProps = {
		pass: getDatabaseData,
	};

	return (
		<div>
			<h2>Articles:</h2>
			<AddStuff {...childProps}></AddStuff>
			<div className="article-cards">
				{articles.map((val: ArticleDocument) => (
					<div className="card">
						<h2>{val.title}</h2>
						<p>
							Consequat duis laborum eiusmod ipsum officia
							incididunt amet laborum in laborum eu anim magna.
						</p>
						{<img src={val.images[0]}></img>}
					</div>
				))}
			</div>
		</div>
	);
};

export default Articles;

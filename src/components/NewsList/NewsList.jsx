import { List, ListItem, NewsTitle, Description, AdditionalInfo, Date, Link } from "./NewsList.styled"

export const NewsList = ({ news }) => {

	const editDate = (date) => {
		return date.split('-').reverse().join("/")
	}

	return <List>
		{news.map(({ _id, title, description, date, url }) => <ListItem key={_id}>
			<NewsTitle>{title}</NewsTitle>
			<Description>{description}</Description>
			<AdditionalInfo>
				<Date>{editDate(date)}</Date>
				<Link href={url} target="_blank" rel="noreferrer">Read more</Link>
			</AdditionalInfo>
		</ListItem>)}
	</List>
}
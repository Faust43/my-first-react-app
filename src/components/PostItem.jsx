import MyButton from './UI/button/MyButton'

const PostItem = props => {
	return (
		<div className='post'>
			<div className='post__content'>
				<h2>
					<strong>
						{props.number}. {props.post.title}
					</strong>
				</h2>
				<p>{props.post.body}</p>
			</div>
			<div className='post__btn'>
				<MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
			</div>
		</div>
	)
}

export default PostItem

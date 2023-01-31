import { useState, useMemo } from 'react'
import Counter from './components/Counter'
import ClassCounter from './components/ClassCounter'
import './styles/App.css'
import PostItem from './components/PostItem'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import PostForm from './components/PostForm'
import MySelect from './components/UI/select/MySelect'
import PostFilter from './components/PostFilter'
import MyModal from './components/UI/modal/MyModal'
import { usePosts } from './hooks/usePost'

function App() {
	const [posts, setPosts] = useState([
		{
			id: 1,
			title: 'фф',
			body: 'Description2',
		},
		{
			id: 2,
			title: 'аа',
			body: 'Description3',
		},
		{
			id: 3,
			title: 'бб',
			body: 'Description1',
		},
	])
	const [filter, setFilter] = useState({ sort: '', query: '' })
	const [modal, setModal] = useState(false)
	const sortedAndSerchedPosts = usePosts(posts, filter.sort, filter.query)

	const createPost = newPost => {
		setPosts([...posts, newPost])
		setModal(false)
	}

	const removePost = post => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className='App'>
			<MyButton style={{ marginTop: 15 }} onClick={() => setModal(true)}>
				Создать пост
			</MyButton>
			<hr style={{ margin: '15px 0' }} />
			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList
				remove={removePost}
				posts={sortedAndSerchedPosts}
				title='Java script'
			/>
		</div>
	)
}

export default App

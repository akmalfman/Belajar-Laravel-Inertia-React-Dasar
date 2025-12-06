import { useForm, Head } from '@inertiajs/react';
import { useRoute } from '../../../vendor/tightenco/ziggy';


export default function Edit({ post }) {
    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    })
    const route = useRoute();


    function handleSubmit(e) {
        e.preventDefault();
        // put(`/posts/${post.id}`)
        put(route('posts.update', post))
    }

    console.log(errors)
    return (
        <>
            {/* <Head>
                <meta head-key="description" name="description" content="This is the create description"
                />
            </Head> */}

            <Head title='Edit' />

            <h1 className="title">Update ur post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={handleSubmit}>
                    <textarea
                        rows="10"
                        value={data.body}
                        onChange={(e) => setData('body', e.target.value)}
                        className={errors.body && 'ring-red-500'}>
                    </textarea>
                    {errors.body && <p className='error'>{errors.body}</p>}
                    <button className="primary-btn mt-4" disabled={processing}>Update Post</button>
                </form>
            </div>
        </>
    )
}

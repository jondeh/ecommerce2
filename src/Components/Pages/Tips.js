import React from 'react';
import '../../SCSS/Tips.scss';
import { blogPosts } from '../../data/blogData';

const mappedPosts = blogPosts.map((post, i) => {
    return <div className="post-square">
        <h3>{i} {post.title}</h3>
    </div>
})

const Tips = () => {
    return (
        <div className="tips-container">
            <h1>Jitterbox Tips</h1>
            <div className="tips-grid">
                {mappedPosts}
            </div>
        </div>
    )
}

export default Tips;
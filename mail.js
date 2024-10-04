const accessToken = 'YOUR_ACCESS_TOKEN'; // Replace with your access token
const userId = 'YOUR_USER_ID'; // Replace with your user ID
const url = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=${accessToken}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const postsContainer = document.getElementById('instagram-posts');
        // Limit to the last 12 posts
        const last12Posts = data.data.slice(0, 12);
        last12Posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            if (post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM') {
                postElement.innerHTML = `
                    <img src="${post.media_url}" alt="${post.caption}">
                    <p>${post.caption || ''}</p>
                `;
            } else if (post.media_type === 'VIDEO') {
                postElement.innerHTML = `
                    <video controls>
                        <source src="${post.media_url}" type="video/mp4">
                    </video>
                    <p>${post.caption || ''}</p>
                `;
            }

            postsContainer.appendChild(postElement);
        });
    })
    .catch(error => console.error('Error fetching Instagram posts:', error));

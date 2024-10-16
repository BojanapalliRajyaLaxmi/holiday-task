        let div=document.createElement("card");
        div.className="gallery"
        document.body.appendChild(div);
        fetch('https://picsum.photos/v2/list')
            .then(response => response.json())
            .then(data => {
                data.forEach(photo => {
                    let box = document.createElement('div');
                    div.appendChild(box);
                    img = document.createElement('img');
                    img.src = photo.download_url;
                    box.appendChild(img);
                    author = document.createElement('p');
                    author.textContent = `By: ${photo.author}`;
                    box.appendChild(author);
                });
            });


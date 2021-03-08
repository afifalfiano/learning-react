/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';


class Carousel extends React.Component{
    state = {
        photos: [],
        active: 0
    };

    static getDerivedStateFromProps({media}) {
        let photos = ['http://placecorgi.com/600/600'];

        if (media.length) {
            photos = media.map(({large}) => large);
        }

        return {photos};
    }
    handleIndexClick = (index) => {
        this.setState({
            // active: +event.target.dataset.index
            active: index
        })
    }
    
    render() {
        const {photos, active} = this.state;
        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal"/>
                <div className="carousel-smaller">
                    {photos.map((photo, index) => 
                        (
                            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
                            <img 
                            key={photo}
                            onClick={this.handleIndexClick.bind(this, index)}
                            // data-index={index}
                            src={photo}
                            className={index === active ? "active" : ""}
                            alt="animal thumbnail"
                            />
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default Carousel;
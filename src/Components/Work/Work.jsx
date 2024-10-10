import React, { useState } from 'react';
import './Work.css';

const Work = () => {
    const [filter, setFilter] = useState('all');
    const [modalContent, setModalContent] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const works = [
        { id: 1, title: 'NodeJS CRUD Web', category: 'web', img: 'https://via.placeholder.com/300/3E494F/FFFFFF?text=NodeJS+Web&font=monospace', github: 'https://github.com/ps3coder' },
        { id: 2, title: 'Python CRUD Web', category: 'web', img: 'https://via.placeholder.com/300/3E494F/FFFFFF?text=Python+Web&font=monospace', github: 'https://github.com/ps3coder' },
        { id: 3, title: 'Chrome Extension', category: 'web', img: 'https://via.placeholder.com/300/3E494F/FFFFFF?text=Chrome+Extension&font=monospace', github: 'https://github.com/ps3coder' },
        { id: 4, title: 'Web3', category: 'blockchain', img: 'https://via.placeholder.com/300/3E494F/FFFFFF?text= + +Web3+ +&font=monospace', github: 'https://github.com/ps3coder' },
        { id: 5, title: 'Web Clones', category: 'design', img: 'https://via.placeholder.com/300/3E494F/FFFFFF?text=Web+Clones&font=monospace', github: 'https://github.com/ps3coder' },
    ];

    const filteredWorks = filter === 'all' ? works : works.filter(work => work.category === filter);

    const openModal = (work) => {
        setModalContent(work);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
        setModalContent(null);
    }

    return (
        <section className="work section" id="work">
            <br />
            <h2 className="section__title">Projects</h2>

            <div className="work__filters">
                <span className="work__item " data-filter='all' onClick={() => setFilter('all')}>All</span>
                <span className="work__item" data-filter='.web' onClick={() => setFilter('web')}>Web</span>
                <span className="work__item" data-filter='.blockchain' onClick={() => setFilter('blockchain')}>Block Chain</span>
                <span className="work__item" data-filter='.design' onClick={() => setFilter('design')}>Clones & Design</span>
            </div>

            <div className="work__container container grid">
                {filteredWorks.map(work => (
                    <div key={work.id} className={`work__card glass mix ${work.category}`}>
                        <img src={work.img} alt={work.title} className="work__img" />
                        <h3 className="work__title">{work.title}</h3>
                        <button className="work__button" onClick={() => openModal(work)}>
                            More info <i className='bx bx-right-arrow work__icon'></i>
                        </button>
                    </div>
                ))}
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close-button" onClick={closeModal}>&times;</span>
                        <h3>{modalContent.title}</h3>
                        <p>GitHub:</p>
                        <a href={modalContent.github} target="_blank" rel="noopener noreferrer">
                            {modalContent.github}
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Work;

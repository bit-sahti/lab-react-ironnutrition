import { useState } from 'react'

const AddFoodForm = props => {
    const [ showForm, setShowForm ] = useState(false);
    const [ name, setName ] = useState('');
    const [ calories, setCalories ] = useState('');
    const [ image, setImage ] = useState('');

    const handleSubmition = e => {
        e.preventDefault();

    if (name && calories && image) {
        props.addNewFood({
            name,
            calories,
            image
        })

        setName('');
        setCalories('');
        setImage('');

        setShowForm(false);
    }

    }

    return (
        <div className="new-food">
            
            {
                !showForm ? 
                    <button 
                    className="button is-info is-large"
                    onClick={() => setShowForm(true)}>
                        Add new food
                    </button>
                :
                    (<form className="" onSubmit={e => handleSubmition(e)}>
                        <div className="field">
                            <label className="label">Name</label>
                            <div className="control">
                                <input 
                                    className="input" 
                                    type="text" 
                                    placeholder="Apple"
                                    value={name}
                                    onChange={e => setName(e.target.value)} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Calories</label>
                            <div className="control">
                                <input 
                                className="input" 
                                type="number"
                                placeholder="50"
                                value={calories}
                                onChange={e => setCalories(e.target.value)}/>
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Image</label>
                            <div className="control">
                                <input 
                                className="input" 
                                type="text" 
                                placeholder="A URL"
                                value={image}
                                onChange={ e => setImage(e.target.value)} />
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                                <button className="button is-link">Submit</button>
                            </div>
                            <div className="control">
                                <button type="button" 
                                className="button is-link is-light" 
                                onClick={() => setShowForm(false)} >
                                    Cancel
                                </button>
                            </div>
                        </div>

                        
                    </form>)
            }
        </div>
    )
}

export default AddFoodForm;
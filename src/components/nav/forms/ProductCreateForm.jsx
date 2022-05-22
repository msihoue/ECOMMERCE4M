import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const ProductCreateForm = ({
    handleSubmit,
    handleChange,
    values,
    setValues,
    handleCategoryChange,
    subOptions,
    showSub,
}) => {
    // destructure
    const {
        title,
        description,
        price,
        old_price,
        categories,
        category,
        subs,
        shipping,
        quantity,
        images,
        colors,
        brands,
        color,
        brand,
    } = values;
    return (
        <form onSubmit={handleSubmit}>
            <div className="form_group">
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    className="form_control"
                    value={title}
                    onChange={handleChange}
                />
            </div>

            <div className="form_group">
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    className="form_control"
                    value={description}
                    onChange={handleChange}
                />
            </div>

            <div className="form_group">
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    className="form_control"
                    value={price}
                    onChange={handleChange}
                />
            </div>

            <div className="form_group">
                <label>Old Price</label>
                <input
                    type="number"
                    name="old_price"
                    className="form_control"
                    value={old_price}
                    onChange={handleChange}
                />
            </div>

            <div className="form_group">
                <label>Shipping</label>
                <select
                    name="shipping"
                    className="form_control"
                    onChange={handleChange}>
                    <option>Please select</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                </select>
            </div>

            <div className="form_group">
                <label>Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    className="form_control"
                    value={quantity}
                    onChange={handleChange}
                />
            </div>

            <div className="form_group">
                <label>Color</label>
                <select
                    name="color"
                    className="form_control"
                    onChange={handleChange}>
                    <option>Please select</option>
                    {colors.map(c => (
                        <option key={c} value={c}>
                            {c}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form_group">
                <label>Brand</label>
                <select
                    name="brand"
                    className="form_control"
                    onChange={handleChange}>
                    <option>Please select</option>
                    {brands.map(b => (
                        <option key={b} value={b}>
                            {b}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form_group">
                <label>Category</label>
                <select
                    name="category"
                    className="form_control"
                    onChange={handleCategoryChange}>
                    <option>Please select</option>
                    {categories.length > 0 &&
                        categories.map(c => (
                            <option key={c._id} value={c._id}>
                                {c.name}
                            </option>
                        ))}
                </select>
            </div>

            {showSub && (
                <div>
                    <label>Sub Categories</label>
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="Please select"
                        value={subs}
                        onChange={value =>
                            setValues({ ...values, subs: value })
                        }>
                        {subOptions.length &&
                            subOptions.map(s => (
                                <Option key={s._id} value={s._id}>
                                    {s.name}
                                </Option>
                            ))}
                    </Select>
                </div>
            )}

            <button className="btn btn-outline-info">Save</button>
        </form>
    );
};

export default ProductCreateForm;

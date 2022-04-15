module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            title: String,
            body: String,
            category: Array,
            image: String,
            club: Array,
            createdBy: String
        },
        {timestamps: true}
    );

    const News = mongoose.model("news", schema)
    return News
};
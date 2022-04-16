module.exports = (mongoose) => {
    const schema = mongoose.Schema(
        {
            image: String,
            title: String,
            body: String,
            category: Array,
            club: Array,
            createdBy: String
        },
        {timestamps: true}
    );

    const News = mongoose.model("news", schema)
    return News
};
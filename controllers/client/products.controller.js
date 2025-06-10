module.exports.index = (req, res) => 
{
    res.render("client/pages/products/index",{
        pageTitle: "Danh Sách Sản Phẩm"
    });
}
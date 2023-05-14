const { DAO } = require('./dao');

const getImages = `
SELECT * 
FROM images
`;
const getImageByName = `
SELECT * 
FROM images
WHERE nombre = $1
`;

const addImage = `
INSERT INTO images
(nombre,link)
VALUES ($1,$2)
`;

const restoreImage = `
UPDATE images
SET deleted=false
WHERE id = $1;
`;

const deleteImage = `
UPDATE images
SET deleted=true
WHERE id = $1;
`;


class ImagesDAO extends DAO {
  constructor() {
    super();
  }

  async getImages() {
    return this.queryOnly(getImages);
  }

  async getImageByName(name) {
    return this.query(getImageByName, [name]);
  }

  async addImage(name, link) {
    return this.query(addImage, [name, link]);
  }

  async restoreImage(id) {
    return this.query(restoreImage, [id]);
  }

  async deleteImage(id) {
    return this.query(deleteImage, [id]);
  }
}

exports.ImagesDAO = ImagesDAO;
// pagination.js

async function paginate(model, req) {
  try {
    console.log(model)
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 25;
    const sortField = req.query.sort || 'id'; // Default sorting by 'id'

    // Validate and sanitize the input values to prevent malicious queries
    const validSortFields = [
      'id',
      'code',
      'name',
      // Add other fields that can be sorted
    ];

    if (!validSortFields.includes(sortField)) {
      throw new Error('Invalid sorting field');
    }

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const data = {};


    data.content = await model
      .find()
      .sort(sortField)
      .limit(limit)
      .skip(startIndex)
      .exec();

    data.pageable = {
      sort: {
        empty: false,
        sorted: true,
        unsorted: false,
      },
      offset: 0,
      pageNumber: page - 1,
      pageSize: limit,
      unpaged: false,
      paged: true,
    };

    // Count total elements for pagination
    const totalCount = await model.countDocuments({});
    data.last = endIndex >= totalCount;
    data.totalElements = totalCount;
    data.totalPages = Math.ceil(totalCount / limit);
    data.size = limit;
    data.number = page - 1;
    data.sort = {
      empty: false,
      sorted: true,
      unsorted: false,
    };
    data.first = page === 1;
    data.numberOfElements = data.content.length;
    data.empty = data.content.length === 0;

    return data;
  } catch (error) {
    throw new Error(`Internal Server Error: ${error.message}`);
  }
}

module.exports = paginate;

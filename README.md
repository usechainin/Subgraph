# Subgraph

Query Endpoint: https://api.studio.thegraph.com/query/60400/chainlinkhackathon/version/latest

Query format:

```
{
  newApplicants {
    id
    applicant
    listingID
    profileURL
  }
}
```

Sample Result:
```
{
  "data": {
    "newApplicants": [
      {
        "id": "0x200d90a896438fb0e21361edd271c2cbb34637f7fffada0ea20613e0de08f86a1d000000",
        "applicant": "0x5f9e06fd34a67637315e7dce6866a4d3783e014e",
        "listingID": "113",
        "profileURL": "linkedIn/TimCook"
      },
      {
        "id": "0x7c27b96e5bae687e10456bf5a6714557dc047853a2422faa51a23ae4e1acf47714000000",
        "applicant": "0x99d05545aa3962354b911c38ec551ce31f0ff0ee",
        "listingID": "111",
        "profileURL": "linkedIn/ALexx"
      },
      {
        "id": "0x9326d06af2632d10ebc980bd8b8c33512b88eaf4d64463e106b612697709828b48000000",
        "applicant": "0x5f9e06fd34a67637315e7dce6866a4d3783e014e",
        "listingID": "111",
        "profileURL": "linkedin/ChrisLuis"
      },
      {
        "id": "0x9326d06af2632d10ebc980bd8b8c33512b88eaf4d64463e106b612697709828b4d000000",
        "applicant": "0x5f9e06fd34a67637315e7dce6866a4d3783e014e",
        "listingID": "111",
        "profileURL": "linkedin/SandyLee"
      },
      {
        "id": "0xa9b8d778dc95aaf65ffb2cbd0e49a29a306819bf0abd94205d25459e39a3ae313a000000",
        "applicant": "0x41ff3a5d17798902e2195538d7e9fb42c7d19070",
        "listingID": "111",
        "profileURL": "linkedin//CarolPao"
      }
    ]
  }
}
```

How to query: https://thegraph.com/docs/en/querying/querying-the-graph/

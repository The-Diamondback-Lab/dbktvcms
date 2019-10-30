/**
 * @file "Deploy Succeeded" Serverless Functions
 * @author Lexus Drumgold <lex@flexdevelopment.llc>
 */

exports.handler = async (event, context) => {
  return {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type'
    },
    statusCode: 200,
    body: JSON.stringify('Hello, World')
  }
}

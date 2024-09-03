import { NextResponse } from 'next/server';

const GITHUB_API_URL = 'https://api.github.com/repos';

export async function GET(request: Request) {
  try {
    // Obtener el nombre del repositorio desde los parámetros de consulta
    const url = new URL(request.url);
    const owner = url.searchParams.get('owner');
    const repo = url.searchParams.get('repo');

    if (!owner || !repo) {
      return NextResponse.json(
        { error: 'Missing owner or repo parameter' },
        { status: 400 }
      );
    }

    // Construir la URL para la solicitud a la API de GitHub
    const response = await fetch(`${GITHUB_API_URL}/${owner}/${repo}`);
    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch repository data' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const stars = data.stargazers_count;

    return NextResponse.json({ stars });
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred' }, { status: 500 });
  }
}

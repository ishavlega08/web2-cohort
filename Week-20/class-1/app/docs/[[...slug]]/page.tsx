
export default async function DocsPage({ params }: {
    params: {
        slug: string[]
    }
}) {
    const rest = (await params).slug;

    return <div>
        Docs {JSON.stringify(rest)}
    </div>
}